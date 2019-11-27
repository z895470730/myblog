import React from 'react';
import styles from "../assets/style/Entry.css";
import blog_entry from '../assets/img/blog_entry.png';
import avatar from '../assets/img/avatar.png';
import blog from '../assets/img/blog.png';
import github_entry from '../assets/img/github_entry.png';
import { Link } from 'react-router-dom';

const Entry = () => {
	return(
		<div className={styles.Entry}>
			<div className={styles.title}>Zhang Xv</div>
			<div className={`${styles.left} col-xs-12 col-sm-6 col-md-6 col-lg-6`}>
				<div className={styles.infoBox}>
					<Link to="/home">
						<img src={avatar} alt="avatar" className={styles.avatar}/>
					</Link>
					<div>九七年前端开发者</div>
					<div>这里是我的博客，会记一些笔记</div>
					<div>
						<Link to="/home">
							<img src={blog_entry} className={styles.blogEntry} alt='博客入口'/>
						</Link>
					</div>
					</div>
			</div>
			<div className={`${styles.right} col-xs-12 col-sm-6 col-md-6 col-lg-6`}>
				<div className={styles.infoBox}>
					<img className={styles.github} src={blog} alt='blog'/>
					<div>Github</div>
					<div>这里有一些我的Demo</div>
					<div>
						<a href='http://github.com/z895470730'>
							<img src={github_entry} className={styles.blogEntry} alt='博客入口'/>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Entry;
