class RemoveTimeFromSong < ActiveRecord::Migration[6.0]
  def change
    remove_column :songs, :time, :string
  end
end
