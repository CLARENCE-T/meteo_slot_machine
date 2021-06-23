class AddClockToSong < ActiveRecord::Migration[6.0]
  def change
    add_column :songs, :clock, :string
  end
end
