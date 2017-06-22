class AddColumnsToTiles < ActiveRecord::Migration[5.1]
  def change
    add_column :tiles, :width, :integer
    add_column :tiles, :height, :integer
    add_column :tiles, :className, :string
    add_column :tiles, :resource, :string
    add_column :tiles, :value, :integer
  end
end
