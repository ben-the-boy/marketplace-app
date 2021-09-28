class ItemsController < ApplicationController
  def index
    items = Item.all
    render json: items, include: [:comments]
  end

  def create
    Item.create(name: params[:name])
  end

  def destroy
  end
end
