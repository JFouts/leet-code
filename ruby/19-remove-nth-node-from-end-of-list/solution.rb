# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @param {Integer} n
# @return {ListNode}
def remove_nth_from_end(head, n)
  node = head
  queue = []

  while node != nil
      queue.push(node)
      node = node.next
      if queue.length > n+1
          queue.shift()
      end
  end

  if queue.length <= n
      return head.next
  end

  node = queue.shift()
  node.next = node.next.next

  return head;
end
