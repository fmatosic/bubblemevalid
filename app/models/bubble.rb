class Bubble < ActiveRecord::Base
	validates :bubble_name, :presence=> true, :allow_blank => false
	validates :bubble_description, :presence=> true, :allow_blank => false
	validates :bubble_age,  :numericality => { :greater_than_or_equal_to => 0 }, :allow_blank => true
	attr_accessible :bubble_name, :bubble_description,:bubble_age
end