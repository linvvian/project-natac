class CreateTiles < ActiveRecord::Migration[5.1]
  def change
    create_table :tiles do |t|
      t.integer :top
      t.integer :left

      t.timestamps
    end
  end
end
