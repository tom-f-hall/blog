import React from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useDisclosure,
  Input,
  Button,
  VStack,
  FormControl,
  Alert,
  AlertIcon,
  FormLabel,
  FormHelperText,
  Textarea,
  Tooltip,
  SimpleGrid,
} from "@chakra-ui/react";

import { List } from 'phosphor-react'
// import { Mail, MailOutline, Menu } from "heroicons-react";
// import { useForm } from "react-hook-form";
import MobileMenuButton from "./mobileMenuButton";
import MobileMenuItem from "./mobileMenuItem";

const MobileMenuToggle = ({ mobile }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   errors,
  //   formState: { isSubmitting, isSubmitSuccessful },
  // } = useForm();
  const onSubmit = async (data) => {
    await sendSuggestion(data);
  };

  return (
    <Box>
      <Tooltip label="Newsletter">
        <MobileMenuButton label="Menu" icon={<List />} onClick={onOpen} />
      </Tooltip>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent borderTopRadius="6px">
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody pb={4}>
              <VStack>
                <MobileMenuItem href="/" title="Home" />
                <MobileMenuItem href="/about" title="About" />
                <MobileMenuItem href="/blog" title="Blog" />
                <MobileMenuItem href="/kermit" title="Kermit" />
                <MobileMenuItem href="/library" title="Library" />

              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default MobileMenuToggle;
