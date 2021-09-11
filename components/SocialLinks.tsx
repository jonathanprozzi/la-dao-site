import { ButtonGroup, ButtonGroupProps, IconButton } from "@chakra-ui/react";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";

const SocialLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant='ghost' color='white' spacing={12} {...props}>
    <IconButton
      as='a'
      href='https://t.me/joinchat/mhq3QM0V91FlNmRl'
      aria-label='Telegram'
      icon={<FaTelegramPlane fontSize='44px' />}
      transition='all ease-in-out .25s'
      _hover={{
        color: "cyan.700",
      }}
    />
    <IconButton
      as='a'
      href='https://twitter.com/lostamberdao'
      aria-label='Twitter'
      icon={<FaTwitter fontSize='44px' />}
      transition='all ease-in-out .25s'
      _hover={{
        color: "cyan.700",
      }}
    />
  </ButtonGroup>
);
export default SocialLinks;
