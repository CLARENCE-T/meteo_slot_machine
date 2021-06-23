class Song < ApplicationRecord
  validates :name, :url, :place, :weather, :clock, presence: true
end
