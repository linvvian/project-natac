class CreatePlayerSettlement < ActiveRecord::Migration[5.1]
  def change
    create_table :player_settlements do |t|
      t.references :player, foreign_key: true
      t.references :settlement, foreign_key: true
    end
  end
end
