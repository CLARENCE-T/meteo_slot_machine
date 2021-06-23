class Place < ApplicationRecord
  has_one_attached :img
  validates :name, :img, presence: true
end
