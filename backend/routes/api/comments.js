/**
 * GET /:commentId
 * Retrieves a single comment by ID
 * @route GET /api/comments/:commentId
 * @param {string} req.params.commentId - The ID of the comment to retrieve
 * @param {object} req.user - The authenticated user object
 * @returns {object} 200 - Comment object formatted for the user
 * @returns {object} 404 - Comment not found error
 * @throws {Error} Passes errors to error handler middleware
 */

/**
 * DELETE /:commentId
 * Deletes a comment by ID. Only the comment's seller can delete it
 * @route DELETE /api/comments/:commentId
 * @param {string} req.params.commentId - The ID of the comment to delete
 * @param {object} req.user - The authenticated user object (must own the comment)
 * @returns {void} 204 - No content on successful deletion
 * @returns {object} 404 - Comment not found error
 * @returns {object} 403 - Unauthorized: user is not the comment owner
 * @throws {Error} Passes errors to error handler middleware
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
router.get("/:commentId", async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.commentId).populate("seller");
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json({ comment: comment.toJSONFor(req.user) });
  } catch (err) {
    next(err);
  }
});
//add another enpoint for deleting a comment
router.delete("/:commentId", async (req, res, next) => {
    try {
        const comment = await Comment.findById(req.params.commentId);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        // Assuming req.user is populated with the authenticated user
        if (comment.seller.toString() !== req.user._id.toString()) {
            return res.status(403).json({ error: "You are not authorized to delete this comment" });
        }
        await Comment.findByIdAndRemove(req.params.commentId);
        res.status(204).end();
    } catch (err) {
        next(err);
    }
});
