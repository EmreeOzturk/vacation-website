import { SubmitHandler } from "react-hook-form";
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
  onSubmit: any;
  title: string;
  footer?: React.ReactElement;
  body?: React.ReactElement;
  btnLabel?: string;
};
