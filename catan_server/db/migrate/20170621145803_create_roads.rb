class CreateRoads < ActiveRecord::Migration[5.1]
  def change
    create_table :roads do |t|
      t.integer :top_coordinate
      t.integer :left_coordinate

    end
  end
end
