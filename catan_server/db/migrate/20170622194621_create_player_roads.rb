class CreatePlayerRoads < ActiveRecord::Migration[5.1]
  def change
    create_table :player_roads do |t|
      t.references :player, foreign_key: true
      t.references :road, foreign_key: true
    end
  end
end
