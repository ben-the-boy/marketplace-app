class Comment < ApplicationRecord
  belongs_to :item
  validates_presence_of :content, :item_id
end
