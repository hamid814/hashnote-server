const Tag = require('../models/Tag')
const asyncHandler = require('../middleware/asyncHandler')
const ErrorResposne = require('../utils/errorResponse')

// @route     GET /api/v1/tags
// @desc      get all tags
exports.getTags = asyncHandler(async (req, res, next) => {
  const tags = await Tag.find();

  res.send({
    success: true,
    count: tags.length,
    data: tags
  })
})

// @route     GET /api/v1/tags/:id
// @desc      get a single tag with id
exports.getTag = asyncHandler(async (req, res, next) => {
  const tag = await Tag.findById(req.params.id);

  if(!tag) {
    return next(
      new ErrorResposne(`No tag with id ${req.params.id}`, 404)
    )
  }

  res.send({
    success: true,
    data: tag
  })
})

// @route    GET /api/v1/tags/search
// @desc     search in tags
exports.searchTags = asyncHandler(async (req, res, next) => {
  res.send('search in tags')
})

// @route     POST /api/v1/tags
// @desc      create a new tag
exports.createTag = asyncHandler(async (req, res, next) => {
  const tag = await Tag.create(req.body);

  res.status(201).json({
    success: true,
    data: tag
  })
})

// @route     DELETE /api/v1/tags/id/:id
// @desc      delete a tag
exports.deleteTag = asyncHandler(async (req, res, next) => {
  const tag = await Tag.findById(req.params.id);

  if(!tag) {
    return next(
      new ErrorResposne(`No tag with id ${req.params.id}`, 404)
    )
  }

  tag.remove()

  res.status(200).json({ success: true, data: {} });
})

// @route     PUT /api/v1/tags/:id
// desc       pudate a tag
exports.updateTag = asyncHandler(async (req, res, next) => {
  res.send('update tag')
})

/*

  get all tags
  gat single tag
  delete tag
  add tag
  edit tag
  search tags
  
  get notes
  get notes with tag
  get note with id
  add note 
  delete note
  edit note

  notes with a tag

*/