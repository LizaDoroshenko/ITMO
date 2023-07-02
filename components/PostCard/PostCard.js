import React from 'react';
import styles from './PostCard.module.css';
import Link from 'next/link';

function Post({post}) {
  return (
    <Link href={`/posts/${post.id}`} className={styles.link}>
    <div className={styles.postCard}>
      {console.log(post)}
        <img className={ styles.image } src={post.image_small} alt='photo'/>
      <p className={styles.date}> { post.date }</p>
      <p className={styles.postTitle}>{ post.title }</p>
      </div>
    </Link>
  );
}

export default Post;