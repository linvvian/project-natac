class AddsCountsToPlayers < ActiveRecord::Migration[5.1]
  def change
    add_column :players, :settlementCount, :integer
    add_column :players, :roadCount, :integer
  end
end
