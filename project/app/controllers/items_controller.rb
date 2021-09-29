class ItemsController < ApplicationController
  def index
    items = Item.all
    render json: items, include: [:comments]
  end

  def create
    Item.create(name: params[:name], description: params[:description], image_url: params[:image_url])
  end

  def show
    item = Item.find(params[:id])
    render json: item
  end

  def destroy
    item = Item.find(params[:id])
    item.destroy
    render json: item
  end
end
