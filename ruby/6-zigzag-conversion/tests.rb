require 'rspec'
require_relative 'solution'

RSpec.describe 'ZigZagConversion' do
  describe "#convert" do
    it "passes case 1" do
      result = convert("PAYPALISHIRING", 3)
      expect(result).to eq("PAHNAPLSIIGYIR")
    end
    it "passes case 2" do
      result = convert("PAYPALISHIRING", 4)
      expect(result).to eq("PINALSIGYAHRPI")
    end
    it "passes case 3" do
      result = convert("A", 1)
      expect(result).to eq("A")
    end 
  end
end

