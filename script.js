document.addEventListener('DOMContentLoaded', function () {
    const jobForm = document.getElementById('jobForm');
    const jobPostsContainer = document.getElementById('jobPosts');
  
    jobForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Get job details from the form
      const jobTitle = document.getElementById('jobTitle').value;
      const jobDescription = document.getElementById('jobDescription').value;
  
      // Create a new job post element
      const jobPost = document.createElement('div');
      jobPost.className = 'post';
  
      // Populate job post content
      jobPost.innerHTML = `
        <div class="post__header">
          <i class="material-icons sidebar__topAvatar"> account_circle </i>
          <div class="post__info">
            <h2>Your Name</h2>
            <p>${jobTitle}</p>
          </div>
        </div>
        <div class="post__body">
          <p>${jobDescription}</p>
        </div>
        <div class="feed__inputOptions">
          <!-- Like, Comment, Share, Send options -->
        </div>
      `;
  
      // Append the new job post to the container
      jobPostsContainer.appendChild(jobPost);
  
      // Clear the form
      jobForm.reset();
    });
  
    const profileForm = document.getElementById('profileForm');
  
    profileForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Get profile details from the form
      const fullName = document.getElementById('fullName').value;
      const bio = document.getElementById('bio').value;
  
      // Update the profile information
      // You can send this data to a server for storage
  
      // Optionally, display a success message or redirect the user
      alert('Profile saved successfully!');
    });
  });
  