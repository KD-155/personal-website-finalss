<script setup>
import image1 from "@/assets/image1.jpg";
import image6 from "@/assets/image6.jpg";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg";
import image2 from "@/assets/image2.jpg";
import image7 from "@/assets/image7.jpg";
import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient';

const commentName = ref('');
const commentText = ref('');
const comments = ref([]);

async function fetchComments() {
  try {
    let { data, error } = await supabase.from('comments').select('*');
    if (error) {
      console.error('Error fetching comments:', error);
    } else {
      comments.value = data;
    }
  } catch (error) {
    console.error('Error fetching comments:', error);
  }
}

async function addComment() {
  if (commentName.value && commentText.value) {
    try {
      const { error } = await supabase.from('comments').insert([
        { name: commentName.value, comment: commentText.value }
      ]);
      if (error) {
        console.error('Error adding comment:', error);
      } else {
        commentName.value = '';
        commentText.value = '';
        fetchComments(); // Refresh comments
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  } else {
    alert('Please enter both your name and message.');
  }
}

onMounted(() => {
  fetchComments(); // Fetch comments when the component mounts
});
</script>

<template>
  <section id="comments" class="comments">
    <div class="comments-container">
      <h2>Thoughts about my website?</h2>
      <p>Let me know your feedback!</p>
      <div class="comments-content">
        <div class="comments-content">
          <textarea v-model="commentName" placeholder="Your Name" required></textarea>
        </div>
        <div class="comments-content">
          <textarea v-model="commentText" placeholder="Message" required></textarea>
        </div>
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