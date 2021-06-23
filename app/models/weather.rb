class Weather < ApplicationRecord
  validates :name, :img, presence: true
  has_one_attached :img
end
