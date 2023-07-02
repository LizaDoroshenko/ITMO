import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard'
import styles from './PostsSection.module.css'

function PostsSection(props) {
  
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://news.itmo.ru/api/news/list/?ver=2.0&lead=1&per_page=9')
      .then(res => res.json())
      .then(
        (result) => {
          setPosts(result.news)
        }
      )
  }, [])

  return (
    <div className={styles.postsSection}>
      <h1 className={styles.postsHeader}>
        Новости и события
      </h1>
      <div className={styles.posts}>
        {posts.map(el => (
          <PostCard key={el.id} post={el}></PostCard>
        ))}
      </div>
    </div>
  );
}

export default PostsSection;