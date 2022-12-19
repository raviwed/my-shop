import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
  } from '@chakra-ui/react';
import Mycart from './Mycart';
function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    < >
      <Mycart onOpen={onOpen} style={{height:"700px"}} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Buy Now</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          </ModalBody>
          <Input placeholder='enter_A/C-number'type="number" />
          <Input placeholder="enter_Amount" type="number" />
         <lable style={{display:"grid",margin:"auto"}}>Tick the Check Box</lable>
          <input type="checkbox" />
          <ModalFooter>
            <Button colorScheme='pink' mr={3} onClick={onClose}>
              Proceed To Pay
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default BasicUsage