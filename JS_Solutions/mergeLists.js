function mergeLists(head1, head2) {
  if(head1 == null) return head2
  if(head2 == null) return head1
  // console.log("head1.data",head1.data)
  // console.log("head2.data",head2.data)
  // console.log("head1.next",head1.next)
  if (head1.data < head2.data) {
       head1.next = mergeLists(head1.next, head2);
       return head1;
   } else {
       head2.next = mergeLists(head1, head2.next);
       return head2;
   }
}