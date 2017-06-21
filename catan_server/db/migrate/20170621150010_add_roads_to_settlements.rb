class AddRoadsToSettlements < ActiveRecord::Migration[5.1]
  def change
    add_reference :settlements, :roads, foreign_key: true, optional: true
  end
end
