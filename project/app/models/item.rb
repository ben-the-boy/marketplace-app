class Item < ApplicationRecord
  has_many :comments
  validates_presence_of :name, :description, :image_url
end
