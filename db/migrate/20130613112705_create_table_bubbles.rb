class CreateTableBubbles < ActiveRecord::Migration
  def change
    create_table :bubbles do |t|
      t.string :bubble_name
      t.string :bubble_description
      t.integer :bubble_age
      t.timestamps
   end
  end
end
