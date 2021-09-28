class CommentsController < ApplicationController
  def index
    comments = Comment.all
    render json: comments
  end

  def create
    comment = Comment.create(content: params[:content], item_id: params[:item_id])
    render json: comment
  end

  def destroy
  end
end
