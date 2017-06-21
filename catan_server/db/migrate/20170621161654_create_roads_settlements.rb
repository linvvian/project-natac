class CreateRoadsSettlements < ActiveRecord::Migration[5.1]
  def change
    create_table :roads_settlements do |t|
      t.references :settlement, foreign_key: true
      t.references :road, foreign_key: true
    end
  end
end
