/**
 * Express router for handling comment operations
 * @module routes/api/comments
 * @requires express
 * @requires mongoose
 */

/**
 * Retrieves all comments for a specific post
 * @route GET /:postId
 * @param {string} req.params.postId - The ID of the post
 * @returns {Object[]} Array of comment objects sorted by creation date (newest first)
 * @throws {Error} 500 - Server error
 */

/**
 * Creates a new comment for a specific post
 * @route POST /:postId
 * @param {string} req.params.postId - The ID of the post
 * @param {Object} req.body - Request body
 * @param {string} req.body.content - The comment content
 * @param {string} req.body.author - The author of the comment
 * @returns {Object} The newly created comment object with ID and timestamps
 * @throws {Error} 500 - Server error
 */

/**
 * Deletes a comment by ID
 * @route DELETE /:commentId
 * @param {string} req.params.commentId - The ID of the comment to delete
 * @returns {Object} Success message confirming comment deletion
 * @throws {Error} 404 - Comment not found
 * @throws {Error} 500 - Server error
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
router.get("/:postId", async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId }).sort({
      createdAt: -1,
    });
    res.json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/:postId", async (req, res) => {
  try {
    const { content, author } = req.body;
    const newComment = new Comment({
      content,
      author,
      postId: req.params.postId,
    });
    const savedComment = await newComment.save();
    res.json(savedComment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});
//add another endpoint to delete a comment
router.delete("/:commentId", async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.commentId);
        if (!deletedComment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});