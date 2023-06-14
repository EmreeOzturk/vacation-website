import { IconType } from "react-icons";
type CategoryItemProps = {
  name: string;
  icon: IconType;
  href: string;
  selected: boolean;
};

type UserMenuItemsProps = {
  name: string;
  icon: IconType;
  onClick: () => void;
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title: string;
  footer?: React.ReactNode;
  body?: React.ReactNode;
  btnLabel?: string;
};

type RegisterModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  body?: React.ReactNode;
  btnLabel?: string;
};
