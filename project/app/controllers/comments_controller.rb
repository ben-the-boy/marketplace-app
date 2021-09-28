class CommentsController < ApplicationController
  def index
    comments = Comment.all
    render json: comments
  end

  def create
    comment = Comment.create(content: params[:content], item_id: params[:item_id])
    render json: comment
  end

  def show
    comment = Comment.find(params[:id])
    render json: comment
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy 
  end
end
