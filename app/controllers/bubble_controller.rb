class BubbleController < ApplicationController
  protect_from_forgery
  def index

  end
  def new
  	@bubble=Bubble.new
		respond_to do |format|
			format.html 
    	end
  end
 def create
 	@bubble=Bubble.new(params[:bubble])

 	respond_to do |format|
 		if @bubble.save
			respond_to do |format|
			format.js {render :json =>@bubble}
			format.html
			end
 		else
			format.js {render :json => {:errors => @bubble.errors}, :status => :unprocessable_entity}
			format.html
		end
	end
 end
end
