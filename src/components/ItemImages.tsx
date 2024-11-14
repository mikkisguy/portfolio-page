import { t } from "i18next";
import { useState, useCallback } from "react";
import { PortfolioItemProps } from "./PortfolioItem";
import styled from "styled-components";
import ImageViewer from "react-simple-image-viewer";
import getPortfolioImage from "../shared/getPortfolioImage";

const ItemImages = (props: Partial<PortfolioItemProps>) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const imageIndexes = [1, 2, 3];
  const imagePaths = imageIndexes.map((value) =>
    getPortfolioImage(props.imageSlug ?? "", value)
  );

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const getImageElement = (index: number) => {
    // Example: Peliruukku image 1
    const imageAltText = `${props.title} ${t("portfolioItem.image")} ${index}`;

    return (
      <img
        key={index}
        src={getPortfolioImage(props.imageSlug ?? "", index, true)}
        alt={imageAltText}
        onClick={() => openImageViewer(index - 1)}
        className="thumbnail"
      />
    );
  };

  return (
    <ImagesContainer>
      {imageIndexes.map((value) => getImageElement(value))}

      {isViewerOpen && (
        <ImageViewer
          src={imagePaths}
          currentIndex={currentImage}
          disableScroll
          closeOnClickOutside
          onClose={() => {
            setCurrentImage(0);
            setIsViewerOpen(false);
          }}
        />
      )}
    </ImagesContainer>
  );
};

export default ItemImages;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};

  @media only screen and (max-width: ${({ theme }) => theme.bp.narrow}) {
    flex-wrap: wrap;
    justify-content: center;
  }

  & .thumbnail {
    border-radius: 1rem;
    border: 3px solid;
    border-color: ${({ theme }) => theme.colors.border};
    opacity: 1;
    transition: opacity 0.5s;

    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  & .react-simple-image-viewer__modal {
    background-color: ${({ theme }) => theme.colors.backgroundImageViewer};
  }
`;
