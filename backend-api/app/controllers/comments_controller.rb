class CommentsController < ApplicationController
  def index
    comments = Comment.all
    render json: comments 
  end

  def create
  end

  def destroy
  end
end
