import React, { useState, useEffect } from 'react';
import './App.css';

const MAX_POST_LENGTH = 300; // Maximum length for a Bluesky post

function App() {
  // Load saved content from localStorage or use empty string as default
  const [postContent, setPostContent] = useState<string>(() => {
    const saved = localStorage.getItem('bluesky-post-content');
    return saved || '';
  });
  const [isAttachmentAdded, setIsAttachmentAdded] = useState<boolean>(false);
  const [isPollAdded, setIsPollAdded] = useState<boolean>(false);
  const [visibility, setVisibility] = useState<string>('public');
  
  // Character count and limit
  const charCount = postContent.length;
  const remainingChars = MAX_POST_LENGTH - charCount;
  const isOverLimit = remainingChars < 0;

  // Save content to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('bluesky-post-content', postContent);
  }, [postContent]);

  // Handle text change in the textarea
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(e.target.value);
  };

  // Handle attachment toggle
  const handleAttachmentToggle = () => {
    setIsAttachmentAdded(!isAttachmentAdded);
  };

  // Handle poll toggle
  const handlePollToggle = () => {
    setIsPollAdded(!isPollAdded);
  };

  // Handle visibility change
  const handleVisibilityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVisibility(e.target.value);
  };
  
  // Clear the post content
  const handleClear = () => {
    setPostContent('');
    setIsAttachmentAdded(false);
    setIsPollAdded(false);
  };

  // Handle post submission (just a demo function)
  const handleSubmit = () => {
    if (isOverLimit) {
      alert('Your post exceeds the maximum character limit.');
      return;
    }
    
    alert(`Post content: ${postContent}\nAttachment: ${isAttachmentAdded ? 'Yes' : 'No'}\nPoll: ${isPollAdded ? 'Yes' : 'No'}\nVisibility: ${visibility}`);
  };

  return (
    <div className="app-container">
      <div className="composer-card">
        <div className="composer-body">
          <h1 className="composer-title">Bluesky Post Composer</h1>
          
          {/* Post content textarea */}
          <div className="textarea-container">
            <textarea
              className={`composer-textarea ${isOverLimit ? 'error' : ''}`}
              placeholder="What's happening?"
              rows={4}
              value={postContent}
              onChange={handleTextChange}
            />
            
            {/* Character counter */}
            <div className={`character-counter ${isOverLimit ? 'error' : ''}`}>
              {charCount}/{MAX_POST_LENGTH} ({remainingChars >= 0 ? remainingChars : 0} remaining)
            </div>
          </div>
          
          {/* Post controls */}
          <div className="controls-container">
            {/* Attachment button */}
            <button 
              className={`control-button ${isAttachmentAdded ? 'active' : ''}`}
              onClick={handleAttachmentToggle}
            >
              📎 {isAttachmentAdded ? 'Remove attachment' : 'Add attachment'}
            </button>
            
            {/* Poll button */}
            <button 
              className={`control-button ${isPollAdded ? 'active' : ''}`}
              onClick={handlePollToggle}
            >
              📊 {isPollAdded ? 'Remove poll' : 'Add poll'}
            </button>
            
            {/* Visibility selector */}
            <select
              className="visibility-selector"
              value={visibility}
              onChange={handleVisibilityChange}
            >
              <option value="public">🌎 Public</option>
              <option value="followers">👥 Followers only</option>
              <option value="unlisted">🔒 Unlisted</option>
            </select>
          </div>
          
          {/* Action buttons */}
          <div className="action-buttons">
            <button 
              className="clear-button"
              onClick={handleClear}
            >
              Clear
            </button>
            <button 
              className={`post-button ${isOverLimit || postContent.trim() === '' ? 'disabled' : ''}`}
              onClick={handleSubmit}
              disabled={isOverLimit || postContent.trim() === ''}
            >
              Post
            </button>
          </div>
        </div>
      </div>
      
      {/* Disclaimer */}
      <div className="disclaimer">
        <p>This is a demo app and doesn't actually post to Bluesky.</p>
      </div>
    </div>
  );
}

export default App;