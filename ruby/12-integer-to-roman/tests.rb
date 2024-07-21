require 'rspec'
require_relative 'solution'

RSpec.describe 'IntegerToRoman' do
  describe "#int_to_roman" do
    it "passes case 1" do
      result = int_to_roman(3749)
      expect(result).to eq("MMMDCCXLIX")
    end
    it "passes case 2" do
      result = int_to_roman(58)
      expect(result).to eq("LVIII")
    end
    it "passes case 3" do
      result = int_to_roman(1994)
      expect(result).to eq("MCMXCIV")
    end 
  end
end

