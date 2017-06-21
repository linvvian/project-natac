class CreateSettlementsTiles < ActiveRecord::Migration[5.1]
  def change
    create_table :settlements_tiles do |t|
      t.references :tile
      t.references :settlement
    end
  end
end
