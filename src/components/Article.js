import React from 'react';
import styles from '../assets/style/Article.css';

class Article extends React.Component{
	state = {

	};

	render() {
		return (
			<div className={`${styles.Article} col-xs-10 col-sm-10 col-md-8 col-lg-6`}>
				<ul className={styles.cardList}>
					{
						[1,2,3].map(()=>{
								return(
									<li className={styles.cardItem}>
										<h2 className={styles.articleTitle}>
											HTML入门基础
										</h2>
										<div className={styles.content}>
											超文本标记语言（英语：HyperText Markup Language，简称：HTML）是一种用于创建网页的标准标记语言。
											您可以使用 HTML 来建立自己的 WEB 站点，HTML 运行在浏览器上，由浏览器来解析。
											在本教程中，您将学习如何使用 HTML 来创建站点。
										</div>
										<div className={styles.cardFooter}>
											<div className={styles.more}>阅读全文</div>
											<div className={styles.date}>2019年12月4日</div>
										</div>
									</li>
								)
						})

					}
					<li className={styles.cardItem}>demo</li>
					<li className={styles.cardItem}>demo</li>
				</ul>
			</div>
		)
	}
}

export default Article;