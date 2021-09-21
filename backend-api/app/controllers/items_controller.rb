class ItemsController < ApplicationController
  def index
    items = Item.all
    render json: items, include: [:comments]
  end

  def create
  end

  def destroy
  end
end
