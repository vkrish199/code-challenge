class Company < ApplicationRecord
  has_rich_text :description

  validates :email, format: { with: /\b[A-Z0-9._%a-z\-]+@getmainstreet\.com\z/, message: "Must be a getmainstreet.com account only" }

  before_save :map_city_state, if: :will_save_change_to_zip_code?

  def get_city_state
    city = self.city || ""
    state = self.state || ""
    "#{city}, #{state}"
  end

  private

  def map_city_state
  	location_hash = self.zip_code.present? ? ZipCodes.identify(self.zip_code) : {}
  	if location_hash.present?
  		self.city = location_hash[:city]
    	self.state = location_hash[:state_name]
    end
  end

end
