class SongSerializer < ActiveModel::Serializer
  attributes :name, :url, :place, :weather, :clock
end
