import React, { useState } from 'react';
import './ArticlePage.css';

const ArticlePage = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    name: '',
    content: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.name && newComment.content) {
      setComments([...comments, { ...newComment, date: new Date().toLocaleString() }]);
      setNewComment({ name: '', content: '' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewComment(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="article-page">
      <h1>Recenzja gry Silent Hill 2</h1>
      <div className="article-content">
        <p>Testowa strona dla recenzji Silent Hill 2</p>
      </div>

      <div className="comments-section">
        <h2>Komentarze</h2>

        <form onSubmit={handleSubmit} className="comment-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Twoje imię"
              value={newComment.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="content"
              placeholder="Treść komentarza"
              value={newComment.content}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Dodaj komentarz</button>
        </form>

        <div className="comments-list">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <div className="comment-header">
                <span className="comment-author">{comment.name}</span>
                <span className="comment-date">{comment.date}</span>
              </div>
              <p className="comment-content">{comment.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;