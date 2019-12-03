import React from 'react';
import styles from '../assets/style/Article.css';

class Article extends React.Component{
	state = {

	};

	render() {
		return (
			<div className={`${styles.Article} col-xs-12 col-sm-8 col-md-8 col-lg-8`}>
				<ul className={styles.cardList}>
					<li className={styles.cardItem}>
						<h3 className={styles.articleTitle}>
							HTML入门基础
						</h3>
						<div className={styles.content}>
							超文本标记语言（英语：HyperText Markup Language，简称：HTML）是一种用于创建网页的标准标记语言。

							您可以使用 HTML 来建立自己的 WEB 站点，HTML 运行在浏览器上，由浏览器来解析。

							在本教程中，您将学习如何使用 HTML 来创建站点。
						</div>
					</li>
					<li className={styles.cardItem}>demo</li>
					<li className={styles.cardItem}>demo</li>
				</ul>
			</div>
		)
	}
}

export default Article;