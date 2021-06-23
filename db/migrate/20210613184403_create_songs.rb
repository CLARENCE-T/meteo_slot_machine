class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :name
      t.string :url
      t.string :weather
      t.string :place
      t.string :time

      t.timestamps
    end
  end
end
