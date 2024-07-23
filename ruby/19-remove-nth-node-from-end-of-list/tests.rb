require 'rspec'
require_relative 'solution'

class ListNode
  attr_accessor :val, :next
  def initialize(val = 0, _next = nil)
    @val = val
    @next = _next
  end
end

def array_to_linked_list(array)
  prev = nil
  array.reverse.each do |i|
    prev = ListNode.new(i, prev)
  end
  return prev
end

def linked_list_to_array(list)
  array = []
  node = list
  while node != nil
    array.push(node.val)
    node = node.next
  end
  return array
end

RSpec.describe 'IntegerToRoman' do
  describe "#int_to_roman" do
    it "passes case 1" do
      result = remove_nth_from_end(array_to_linked_list([1,2,3,4,5]), 2)
      expect(linked_list_to_array(result)).to eq([1,2,3,5])
    end
    it "passes case 2" do
      result = remove_nth_from_end(array_to_linked_list([1]), 1)
      expect(linked_list_to_array(result)).to eq([])
    end
    it "passes case 3" do
      result = remove_nth_from_end(array_to_linked_list([1,2]), 1)
      expect(linked_list_to_array(result)).to eq([1])
    end 
  end
end

