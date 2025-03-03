<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient'; // Adjust the path if needed

const commentName = ref('');
const commentText = ref('');
const comments = ref();
const error = ref(null); // For displaying error messages

async function fetchComments() {
  error.value = null; 
  try {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .order('created_at', { ascending: false }); // Order by newest first
    if (error) {
      console.error('Error fetching comments:', error);
      error.value = 'Failed to load comments. Please try again later.';
    } else {
      comments.value = data;
    }
  } catch (err) {
    console.error('Error fetching comments:', err);
    error.value = 'Failed to load comments. Please try again later.';
  }
}

async function addComment() {
  error.value = null;
  if (commentName.value && commentText.value) {
    try {
      const { error } = await supabase
        .from('comments')
        .insert([{ name: commentName.value, comment: commentText.value }]);
      if (error) {
        console.error('Error adding comment:', error);
        error.value = 'Failed to add comment. Please try again later.';
      } else {
        commentName.value = '';
        commentText.value = '';
        fetchComments(); // Refresh comments after adding
      }
    } catch (err) {
      console.error('Error adding comment:', err);
      error.value = 'Failed to add comment. Please try again later.';
    }
  } else {
    alert('Please enter both your name and message.');
  }
}

onMounted(() => {
  fetchComments();
});
</script>

<template>
  <section id="comments" class="comments">
    <div class="comments-container">
      <h2>Thoughts about my website?</h2>
      <p>Let me know your feedback!</p>
      <div v-if="error" class="error-message">{{ error }}</div> <div class="comments-content">
        <textarea v-model="commentName" placeholder="Your Name" required></textarea>
      </div>
      <div class="comments-content">
        <textarea v-model="commentText" placeholder="Message" required></textarea>
      </div>
      <button @click="addComment">Submit</button>
      <div id="comment-list">
        <div v-for="comment in comments" :key="comment.id" class="comment-item">
          <strong>{{ comment.name }}:</strong> {{ comment.comment }}
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.error-message {
  color: red;
  margin-bottom: 10px;
}
</style>