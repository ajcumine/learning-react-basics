/** @jsx React.DOM */

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        This is a comment list.
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        CommentForm :D
      </div>
    );
  }
});

React.renderComponent(
  <CommentBox />,
  document.getElementById('content')
);
